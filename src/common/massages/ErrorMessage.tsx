type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className="flex flex-col justify-center items-center">
    <h2 className="text-2xl font-semibold text-red-500">{message}</h2>
    <p>Please try again later.</p>
  </div>
);
