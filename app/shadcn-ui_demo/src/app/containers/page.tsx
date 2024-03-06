"use client";

import getContainerList from "@/actions/get-container-list";
import ContainerCard from "@/components/container-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ContainerInfo } from "@/lib/types";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";

const selectedContainerAtom = atom<ContainerInfo | null>(null);



export default function Page() {
    const [ContainerListData, setContainerListData] = useState<ContainerInfo[]>([]);
    const [selectedContainer, setSelectedContainer] = useAtom(selectedContainerAtom);

    useEffect(() => {
        getContainerList().then((data) => setContainerListData(data));
    }, []);

    console.log(ContainerListData.length);

    return (
        <>
            <div className="w-full flex justify-center p-5">
                <div className="container border rounded-2xl h-[87vh] flex p-0">
                    <div className="flex-none border-r w-[27%] flex flex-col">
                        <div className="flex-none border-b h-[8%] w-full flex items-center justify-center">
                            <h1 className="font-bold">Container List</h1>
                        </div>
                        <ScrollArea className="w-full h-full gap-4">
                            {ContainerListData.length > 0 ? (
                                ContainerListData.map(
                                    (ContainerDetails: ContainerInfo) => (
                                        <ContainerCard
                                            key={ContainerDetails.ID}
                                            ContainerDetails={ContainerDetails}
                                            onSelect={() =>
                                                setSelectedContainer(
                                                    ContainerDetails
                                                )
                                            }
                                        />
                                    )
                                )
                            ) : (
                                <p className="text-center w-full py-[100%]">
                                    API Server is stopped.
                                </p>
                            )}
                        </ScrollArea>
                    </div>
                    <div className="flex-none w-[73%]">
                        {selectedContainer ? (
                            <p>{selectedContainer.Names}</p>
                        ) : (
                            <p className="text-center py-[40%]">
                                Not Selected.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
