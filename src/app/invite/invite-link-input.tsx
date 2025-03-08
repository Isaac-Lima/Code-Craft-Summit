import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Link, Copy } from "lucide-react";

export function InviteLinkInput(){
    return(
        <InputRoot>
            <InputIcon>
                <Link className='size-5'></Link>
            </InputIcon>
                        
            <InputField readOnly defaultValue={"hhtp/localhost:3000/invite/123asd123kajsbdkjb"}/>

            <IconButton className='-mr-2'>
                <Copy className='size-5'></Copy>
            </IconButton>
        </InputRoot>
    )
}