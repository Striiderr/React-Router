import { NavLink, Outlet,useSearchParams } from "react-router-dom";
import { getInvoices } from "./data";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input 
          value={searchParams.get("filter") || ""}
          onChange={ (event) => {
            let filter =event.target.value;
            console.log("The event target value in filter is: ", filter);
            if(filter){
              setSearchParams({filter});
            }
            else {
              setSearchParams({});
            }
          }}
          />
        {invoices
        .filter((invoice)=>{
          let filter=searchParams.get("filter");
          console.log("The filter is: ", filter);

          if(!filter){
            return true;
          }
          let name=invoice.name.toLowerCase();
          console.log("The return value is: ", name.startsWith(filter.toLowerCase()));
          return name.startsWith(filter.toLowerCase());
        })
        .map((invoice) => (
          <NavLink
            style={({isActive})=> {
              return {
                display:'block',
                margin:'1rem 0',
                color: isActive ? 'red' : "",
              };
            }}
          //<NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet/>
    </div>
  );
}
