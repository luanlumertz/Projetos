type Props = {
    label: string;
    onClick?: () => void;
    size: 'large' | 'medium' | 'small'
}

export const Button = ({ label, onClick, size }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`flex justify-center items-center cursor-pointer bg-white text-black font-bold rounded-3xl
                ${size === 'large' && 'h-14 text-lg'}
                ${size === 'medium' && 'h-10 text-md'}
                ${size === 'small' && 'h-7 text-xs'}`}
        >
            {label}
        </div>
    )
}