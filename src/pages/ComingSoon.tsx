import Footer from "@/components/footer";

const ComingSoon = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
            <h1 className="text-6xl font-bold mb-4 animate-fade-in">Yakında Burada!</h1>
            <p className="text-xl animate-fade-in">Biz üzerinde çalışıyoruz. Yakında daha fazlası için bizi takip edin.</p>
            <Footer />
        </div>
    );
}

export default ComingSoon;