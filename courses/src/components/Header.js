import React from "react";
import {Card, CardBody } from "reactstrap";

function Headers({name,title})
{
    return(
        <div>
            <Card className="my-1 bg-warning" >
                <CardBody>
                <h1 className="text-center my-2">Welcome to Courses Application</h1>
                </CardBody>
            </Card>

            
        </div>
    

        
            
    )
}
export default Headers;