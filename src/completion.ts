import { TextDocument, Position, CompletionItem, SnippetString, CompletionItemKind } from 'vscode';
import { Snippet } from './types';
import { throttle } from 'lodash';
import { store } from './store';
import { getSnippets } from "./request";

const dealCodeFromServer = async (keyword: string) => {
    const data = await getSnippets(keyword);
    return data.map((item: Snippet) => {
        const code = new CompletionItem('@@' + item.prefix, CompletionItemKind.Snippet);
        code.insertText = new SnippetString(item.body);
        code.detail = item.body;
        return code;
    });
};

const dealCodeFromServerThrottle = throttle(dealCodeFromServer, 50, { trailing: true });

export async function provideCompletionItems(document: TextDocument, position: Position) {
    const line = document.lineAt(position);
    const lineText = line.text.substring(0, position.character).trim();
    if (lineText.startsWith('@@')) {
        const codes = await dealCodeFromServerThrottle(lineText.substring(2));
        return codes;
    }
}

export function resolveCompletionItem(item: { label: string; }) {
    const prefix = item.label.substring(2);
    store.addSelectStore(prefix, 1);
    return null;
}
