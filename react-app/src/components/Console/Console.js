const Console = ({ logs }) => {
    return (
      <div className=" border border-secondary w-90 mx-3 ">
      
        <ul className="d-flex flex-wrap">
          {logs.map((log, index) => (
            <>
            <li  className="text-light bg-black ms-2 px-3 opacity-75 my-1 rounded-pill " key={index}>{log}</li>
            <li>
             </li>
                </>
          ))}
        </ul>
      
      </div>
    );
  };
  export default Console;