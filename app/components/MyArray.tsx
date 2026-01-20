type MyArrayProps = {
    array: number[];
}

export default function MyArray({ array }: MyArrayProps) {
    return (
        <table className="table-fixed min-w-80">
            <tbody className="border border-lime-900">
                <tr className="w-fit border-b border-b-lime-900">
                    <th
                        className="text-lime-700 px-2 bg-lime-950/50"
                    >
                        index:
                    </th>

                    {
                        array.length === 0
                        ?
                            <td className="bg-lime-950/50 px-3 text-center border-l border-l-lime-900" rowSpan={2}><code>myNumberArray</code> is empty!</td>
                        :
                        array.map((_item, index) => {
                            return (
                                <td 
                                    key={index}
                                    className="w-fit text-lime-500 font-light pl-2 pr-4 py-1 border-l border-l-lime-900"
                                >
                                    {index}
                                </td>
                            );
                        })
                    }
                </tr>

                <tr className="w-fit">
                    <th 
                        className="text-lime-700 px-2 bg-lime-950/50"
                    >
                        value:
                    </th>
                    { 
                        array.length === 0
                        ?
                            null
                        :
                        array.map((item, index) => {
                            return (
                                <td 
                                    key={index}
                                    className="w-fit text-lime-300 pl-2 pr-4 py-1 border-l border-l-lime-900 bg-lime-950"
                                >
                                    {item}
                                </td>
                            );
                        })
                    }
                </tr>
            </tbody>
        </table>
    );
}