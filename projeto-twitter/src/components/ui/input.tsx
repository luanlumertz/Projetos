"use client"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";

type Props = {
    type?: string;
    filled?: boolean;
    icon?: IconDefinition
    placeholder: string;
    value?: string;
    onChange?: (newValue: string) => void;
    onEnter?: () => void
}

export const Input = ({ type, filled, icon, placeholder, value, onChange, onEnter }: Props) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter' && onEnter) {
            onEnter()
        }
    }

    return (
        <div className={`focus-within:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
            {icon &&
                <FontAwesomeIcon
                    icon={icon}
                    className="ml-4 size-6 text-gray-500"
                />
            }
            <input
                type={showPassword ? 'text' : type}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                className="flex-1 outline-none bg-transparent h-full px-4"
                onKeyUp={handleKeyUp}
            />
            {type === 'password' &&
                <FontAwesomeIcon
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? faEye : faEyeSlash}
                    className="cursor-pointer mr-4 size-6 text-gray-500"
                />
            }
        </div>
    )
}