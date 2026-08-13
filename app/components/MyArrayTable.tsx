type MyArrayTableProps = {
  array: number[];
};

export default function MyArrayTable({ array }: MyArrayTableProps) {
  return (
    <table className="w-fit">
      <tbody className="border border-lime-900">
        <tr className="border-b border-b-lime-900">
          <th className="bg-lime-950/25 px-2 py-1 text-lime-600">index:</th>

          {array.length === 0 ? (
            <td
              className="w-fit border-l border-l-lime-900 bg-lime-950/50 px-3 text-center text-lime-500"
              rowSpan={2}
            >
              <code>myNumberArray</code> is empty!
            </td>
          ) : (
            array.map((_item, index) => {
              return (
                <td
                  key={index}
                  className="w-fit border-l border-l-lime-900 py-1 pr-4 pl-2 font-light text-lime-500"
                >
                  {index}
                </td>
              );
            })
          )}
        </tr>

        <tr className="">
          <th className="bg-lime-950/25 px-2 py-1 text-lime-600">value:</th>
          {array.length === 0
            ? null
            : array.map((item, index) => {
                return (
                  <td
                    key={index}
                    className="w-fit border-l border-l-lime-900 bg-lime-950 py-1 pr-4 pl-2 text-lime-300"
                  >
                    {item}
                  </td>
                );
              })}
        </tr>
      </tbody>
    </table>
  );
}
