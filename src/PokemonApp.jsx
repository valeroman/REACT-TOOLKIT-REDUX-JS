import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";


export const PokemonApp = () => {

   const { pokemons = [], isLoading, page } = useSelector( state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPokemons() );
    },[]);

    const nextPagePokemons = () => {
        dispatch( getPokemons(page));
    }

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: { isLoading ? 'True' : 'False' }</span>
            <ul>
                {
                    pokemons.map( poke => (
                        <li key={ poke.name }>{ poke.name }</li>
                    ))
                }
            </ul>

            <button
                disabled={ isLoading }
                onClick={ nextPagePokemons }
            >
                Next
            </button>
        </>
    )
}
