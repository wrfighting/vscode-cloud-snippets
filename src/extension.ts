// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { provideCompletionItems, resolveCompletionItem } from "./completion";
import { reportSnippetsTotals } from "./request";
import { store } from './store';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const completion = vscode.languages.registerCompletionItemProvider(['javascript', 'typescript'], {
		provideCompletionItems,
		resolveCompletionItem
	});

	context.subscriptions.push(completion);

	vscode.workspace.onDidCloseTextDocument(async () => {
		console.log(store.selectStore);
		await reportSnippetsTotals(store.selectStore);
		store.clearSelectStore();
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
