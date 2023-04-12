import Model from "./Model";
import rocket from "../../assets/rocket.fbx"

function ModelViewer() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Model modelPath={rocket} />
        </div>
    );
}

export default ModelViewer;
