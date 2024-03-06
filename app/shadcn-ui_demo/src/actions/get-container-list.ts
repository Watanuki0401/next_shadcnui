"use server";

import { ContainerInfo } from "@/lib/types";

export default async function getContainerList() {
    try {
        const responce = await fetch("http://express_apiserver:3000/dockerps");

        if (!responce.ok) {
            throw new Error(`API Server is stopping now. (&{reaponse.Status})`);
        }

        const ContainerListData: ContainerInfo[] = await responce.json();
        return ContainerListData;
    } catch (Error) {
        const ContainerListData: ContainerInfo[] = [];
        return ContainerListData;
    }
}