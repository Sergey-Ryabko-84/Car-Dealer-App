type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <main className="flex flex-col items-center p-10">
    <h1 className="text-2xl font-semibold text-red-500">{message}</h1>
    <p>Please try again later.</p>
  </main>
);
