import { useRecipeStore } from "../../store/store"

function Recipe({ isOpen, closeModal }) {
    const recipes = useRecipeStore((state) => state.recipes)

    return (
        <div>
            {isOpen && (
                <dialog open className="modal flex flex-col justify-center items-center modal-bottom sm:modal-middle bg-slate-800">
                    <div className="w-[70%] p-4 overflow-y-auto max-h-[60%]">
                        {recipes.map((recipe, index) => (
                            <div
                                key={index}
                                className="gap-2 bg-gray-900 mb-6 p-5 rounded-md"
                            >
                                <h1 className="font-sans font-extrabold text-zinc-300 text-4xl mb-2">{recipe.recipeName}</h1>
                                <div className="gap-2 bg-gray-700 mb-6 p-5 rounded-md">
                                    <div>
                                        <h1 className="font-sans font-extrabold text-zinc-300 text-2xl mb-2">RecipeDetails</h1>
                                        <p className="text-zinc-100 text-lg text-wrap">{recipe.recipeDetails}</p>
                                    </div>
                                    <div>
                                        <h1 className="font-sans font-extrabold text-zinc-300 text-2xl mb-2">Machines:</h1>
                                        <p className="text-zinc-100 text-lg text-wrap rounded-md bg-slate-900 w-fit p-2">{recipe.machineIds}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-sm btn-primary" onClick={closeModal}>Close</button>
                    </div>
                </dialog>
            )}
        </div>
    )
}

export default Recipe;
