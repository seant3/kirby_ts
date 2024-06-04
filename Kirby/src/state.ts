export const globalGameState: {
    scenes: string[];
    nextScene: string;
    currentScene: string;
    setNextScene: (SceneName: string) => void;
    setCurrentScene: (SceneName: string) => void;
} = {
    scenes: ["level-1", "level-2", "end"],
    nextScene: "",
    currentScene: "level-1",
    setCurrentScene(sceneName: string) {
        if (this.scenes.includes(sceneName)) {
            this.currentScene = sceneName;
        }
    },
    setNextScene(sceneName: string) {
        if (this.scenes.includes(sceneName)) {
            this.nextScene = sceneName;
        }
    },
};