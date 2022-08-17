import axios from "axios";
import { SelectStore } from "./types";

export async function getSnippets(keyword: string) {
    try {
        const response = await axios.get('https://mock.apifox.cn/m1/1449687-0-default/test2', {
            params: {
                keyword,
            }
        });
        if (response.data.code === 0) {
            return response.data.data;
        }
    } catch (e) {}
    return null;
}

export async function reportSnippetsTotals(data: SelectStore) {
    try {
        const response = await axios.post('https://mock.apifox.cn/m1/1449687-0-default/test2', {
            totals: data
        });
        if (response.data.code === 0) {
            return response.data.data;
        }
    } catch (e) {}
    return null;
}
