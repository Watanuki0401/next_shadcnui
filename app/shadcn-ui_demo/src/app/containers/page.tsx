import AboutContainerView from "@/components/about-container-view";
import ContainerCard from "@/components/container-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ContainerInfo } from "@/lib/types";

async function getContainerList() {
    const responce = await fetch("http://express_apiserver:3000/dockerps", {
        cache: "no-store",
    });

    const ContainerListData: ContainerInfo[] = await responce.json();

    return ContainerListData;
}

export default async function Page() {
    const ContainerListData = await getContainerList();

    console.log(ContainerListData);

    return(
        <>
        <div className="w-full flex justify-center p-5">
            <div className="container border rounded-2xl h-[87vh] flex p-0">
                <div className="flex-none border-r w-[27%] flex flex-col">
                    <div className="flex-none border-b h-[8%] w-full flex items-center justify-center">
                        <h1 className="font-bold">Container List</h1>
                    </div>
                    <ScrollArea className="w-full h-full gap-4">
                        {ContainerListData.map((ContainerDetails: ContainerInfo) => (
                            <ContainerCard key={ContainerDetails.ID} ContainerDetails={ContainerDetails}/>
                        ))}
                    </ScrollArea>
                </div>
                <div className="flex-none w-[73%]">

                </div>
            </div>
        </div>
        </>
    );
}