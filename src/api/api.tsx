import axios from "axios";



const control = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});


export async function Getproduct() {
    const { data } = await control.get("/articles");
    return data;
}

export async function Getcartpage(id: number | string) {
    const { data } = await control.get(`/articles/${id}`);
    return data;
}

export async function Gethistory() {
    const { data } = await control.get("/history");
    return data;
}

export async function Gethistorypage(id: number | string) {
    const { data } = await control.get(`/history/${id}`);
    return data;
}

export async function Getnaval() {
    const { data } = await control.get("/naval");
    return data;
}

export async function Getnavalpage(id: number | string) {
    const { data } = await control.get(`/naval/${id}`);
    return data;
}
