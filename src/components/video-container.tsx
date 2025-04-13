export default function VideoContainer() {
    return (
        <div className="bg-[#DEDEDE] overflow-hidden max-h-[60vh] p-12 flex items-center justify-center aspect-video">
            <video width="320" height="240" controls loop preload="auto">
                <source 
                    src="/images/research-case/test-video-cover.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}