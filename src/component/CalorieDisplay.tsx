type CalorieDisplayProps = {
    calories: number;
    text: string;
};

export default function CalorieDisplay({ calories, text }: CalorieDisplayProps) {
    return (
        <div className="text-white text-4xl font-bold space-y-3 rounded-full grid grid-cols-1 gap-3 text-center">
            <p className="text-center">{text}</p>
            <p className="text-center">
                {calories} {"Calorías"}
            </p>
        </div>
    );
}
