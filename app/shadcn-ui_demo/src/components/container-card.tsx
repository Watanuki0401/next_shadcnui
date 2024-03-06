import { ContainerInfo } from "@/lib/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

interface containerInfomationProps {
    ContainerDetails: ContainerInfo;
    onSelect: () => void;
}

const ContainerCard = ({ ContainerDetails, onSelect }: containerInfomationProps) => {
    const { Names, Image, Status } = ContainerDetails;

    return (
        <Card onClick={onSelect}>
            <CardHeader>
                <CardTitle>{Names}</CardTitle>
                <CardDescription>{Image}</CardDescription>
            </CardHeader>
            <CardFooter>{Status}</CardFooter>
        </Card>
    );
};

export default ContainerCard;
