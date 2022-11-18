export interface ICompete
{
    id: number;
    StageTitle: String;
    startDate: Date;
    endDate: Date;
    description: string;
    idOfTitle: number,
    process: string,
    prompt: string,
    response: string | number;
}