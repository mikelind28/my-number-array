import { useEffect, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";

type DetailElementProps = {
    textContent: string;
    url: string;
    children: ReactNode;
};

function DetailElement({ textContent, url, children }: DetailElementProps) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setIsOpen(location.pathname === `/number-array/methods${url}`);
    }, [location, url]);

    function handleClick(event: React.MouseEvent) {
        event.preventDefault();
        if (isOpen) {
            navigate("/number-array/methods");
        } else {
            navigate(`/number-array/methods${url}`);
        }
    }
    
    return (
        <details 
            open={isOpen}
            className={`max-w-full p-2 bg-gray-800 rounded-md ${isOpen ? "border-2 border-lime-400" : ""}`}
        >
            <summary 
                onClick={handleClick}
                className="text-lime-300 mb-1"
            >
                <code>
                    {textContent}
                </code>
            </summary>
            <div className="bg-gray-900/70 rounded-sm p-4 text-lime-300">
                { isOpen && children}
            </div>
        </details>
    );
}

// { children } is the React Router <Outlet />, passed to DetailDisclosureView from NumberMethodsHome, and will conditionally display whichever element is associated with the given url
export default function DetailDisclosureView({ children }: { children: ReactNode}) {
    return (
        <div className="max-w-full flex flex-col gap-2">
            <DetailElement textContent="Welcome!" url="">
                {/* <Welcome /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".at()" url="/at">
                {/* <At /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".concat()" url="/concat">
                {/* <Concat /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".copyWithin()" url="/copy-within">
                {/* <CopyWithin /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".every()" url="/every">
                {/* <Every /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".fill()" url="/fill">
                {/* <Fill /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".filter()" url="/filter">
                {/* <Filter /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".find()" url="/find">
                {/* <Find /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".findLast()" url="/find-last">
                {/* <FindLast /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".includes()" url="/includes">
                {/* <Includes /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".join()" url="/join">
                {/* <Join /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".map()" url="/map">
                {/* <Map /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".pop()" url="/pop">
                {/* <Pop /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".push()" url="/push">
                {/* <Push /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".reduce()" url="/reduce">
                {/* <Reduce /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".reverse()" url="/reverse">
                {/* <Reverse /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".shift()" url="/shift">
                {/* <Shift /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".slice()" url="/slice">
                {/* <Slice /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".some()" url="/some">
                {/* <Some /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".sort()" url="/sort">
                {/* <Sort /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".splice()" url="/splice">
                {/* <Splice /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".unshift()" url="/unshift">
                {/* <Unshift /> */}
                {children}
            </DetailElement>

            <DetailElement textContent=".with()" url="/with">
                {/* <With /> */}
                {children}
            </DetailElement>
        </div>
    );
}