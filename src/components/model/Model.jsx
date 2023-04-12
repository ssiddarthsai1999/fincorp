import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

function Model({ modelPath }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const canvasRef = useRef(null);

    useEffect(() => {
        const loader = new FBXLoader();
        loader.load(
            modelPath,
            (object) => {
                setLoading(false);
                const canvas = canvasRef.current;
                const renderer = new THREE.WebGLRenderer({ canvas });
                renderer.setSize(canvas.clientWidth, canvas.clientHeight);
                const camera = new THREE.PerspectiveCamera(
                    75,
                    canvas.clientWidth / canvas.clientHeight,
                    0.1,
                    1000
                );
                camera.position.z = 5;
                const scene = new THREE.Scene();
                scene.add(object);

                // Add lighting to the scene
                const light = new THREE.PointLight(0xffffff, 1, 100);
                light.position.set(0, 10, 10);
                scene.add(light);

                const animate = () => {
                    requestAnimationFrame(animate);
                    renderer.render(scene, camera);
                };
                animate();
            },
            undefined, // onProgress callback
            (err) => {
                setLoading(false);
                setError(true);
                console.error(err);
            }
        );
    }, [modelPath]);

    return (
        <div className="relative">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-bold text-2xl">
                        Loading...
                    </div>
                </div>
            )}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-red-500 font-bold text-2xl ">
                        Error loading model
                    </div>
                </div>
            )}
            <canvas
                className="w-full h-full"
                ref={canvasRef}
                aria-label="3D Model"
            />
        </div>
    );
}

export default Model;
