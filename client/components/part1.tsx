import { FC } from "react"

export const Part1 = () => {
    return (<div>
        <h1>PART 1</h1>
        <table>
            <tbody>
                <tr><th>This is part</th></tr>
            </tbody>
        </table>
    </div>)
}

interface PartCustomType {
    title: string
    theadName: string
}

export const PartCustom: FC<PartCustomType> = ({ title, theadName }) => {
    return (
        <div className={'sampleClass123'}>
            <h1>{title}</h1>
            <table>
                <tbody>
                    <tr><th>{theadName}</th></tr>
                </tbody>
            </table>
        </div>)
}

