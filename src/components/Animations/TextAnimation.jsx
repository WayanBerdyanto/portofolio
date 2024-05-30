import { TypeAnimation } from 'react-type-animation';

function TextAnimation(props) {
    return (
        <div>
            <TypeAnimation
                preRenderFirstString={true}
                sequence={props.sequence}
                speed={50}
                repeat={Infinity}
            />
        </div>
    );
}

export default TextAnimation;
