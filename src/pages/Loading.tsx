import { DNA } from 'react-loader-spinner';

type LoadingText = {
  text: string;
}

const LoadingScreen: React.FC<LoadingText> = ({ text }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <DNA
        visible={true}
        height="400"
        width="400"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <p className="text-white text-xl">{text}</p>
    </div>
  );
};

export default LoadingScreen;