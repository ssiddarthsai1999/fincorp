import Model from "./Model";

function ModelViewer() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Model modelPath="/path/to/my-model.fbx" />
        </div>
    );
}

export default ModelViewer;
