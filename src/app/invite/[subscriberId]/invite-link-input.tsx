'use client'

import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Link, Copy } from "lucide-react";

interface InviteLinkInputProps{
    inviteLink: string
}

export function InviteLinkInput({ inviteLink }:InviteLinkInputProps){
    function copyInviteLink(){
        navigator.clipboard.writeText(inviteLink)
    }

    return(
        <InputRoot>
            <InputIcon>
                <Link className='size-5'></Link>
            </InputIcon>
                        
            <InputField readOnly defaultValue={inviteLink}/>

            <IconButton className='-mr-2' onClick={copyInviteLink}>
                <Copy className='size-5'></Copy>
            </IconButton>
        </InputRoot>
    )
}