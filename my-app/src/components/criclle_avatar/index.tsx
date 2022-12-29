export const CricleAvatar = ({
    url,
    size,
    onClick, 
    }: { 
        url: string,
         size: number; onClick: () => void;
         }): JSX.Element => { 
            return (
                <img
                    src = {url}
                    style={{width:`${size}px`, height:`${size}px`}}
                    onClick = {onClick}
                    className = "rounded-full border-[1px]"
                    alt =""
                    draggable= {false}
                />
            );
         };