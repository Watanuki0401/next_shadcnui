import { ContainerSummary } from "@/lib/types";

async function getContainerList() {
    const responce = await fetch("http://express_apiserver:3000/dockerps", {
        cache: "no-store",
    });

    const ContainerListData: ContainerSummary[] = await responce.json();

    return ContainerListData;
}

export default async function Page() {
    const ContainerListData = await getContainerList();

    console.log(ContainerListData);

    return(
        <>
        <div className="w-full flex justify-center p-5">
            <div className="container border rounded-2xl h-[87vh] flex p-0">
                <div className="flex-none border-r w-[27%]">

                </div>
                <div className="flex-none w-[73%]">

                </div>
            </div>
        </div>
        </>
    );
}