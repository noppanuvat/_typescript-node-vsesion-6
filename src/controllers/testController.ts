import { Response, Request, NextFunction } from "express"

export let getApi = (req: Request, res: Response) => {
    res.send(req.query.names)
}

export let getApiReturn = () => {

    function printLabel(labelledObj: LabelledValue) {
        console.info(labelledObj.label)
        return labelledObj
    }

    const myObj = {size: 10, label: "Size 10 Object"}
    return myObj

}

interface LabelledValue {
    label: string
}
