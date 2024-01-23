import getSvg from "./getSvg";

type CustomSvgProps = {
    name: string
    width?: number
    height?: number
    color?: string
}

const CustomSvg = (props: CustomSvgProps) => {
    const Icon = getSvg(props.name);
    
    return (
        <Icon width={props.width || 20} height={props.height || 20} color={props.color || 'black'} />
    )
}

export default CustomSvg;

// https://github.com/expo/expo/issues/6660