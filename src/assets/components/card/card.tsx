import { Flower, useCartStore } from '../../../store';
import styles from '../card/card.module.css'

interface Props {
    flower: Flower;
}

export function Card({ flower }: Props) {
    return (
        <>
            <div className={styles.card}>
                <img src={flower.image} alt={flower.name} />
                <h2>{flower.name}</h2>
                <div className={styles.price}>
                    <p>{flower.price}$</p>
                    <button className={styles.addButton} onClick={() => useCartStore.getState().addToCart(flower)}>
                        <img src="/cart.png" alt="" />
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}