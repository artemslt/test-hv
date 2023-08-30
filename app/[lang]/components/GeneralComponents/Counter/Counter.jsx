import React from "react";
import { Field, Form, Formik } from "formik";
import MinusIcon from "./MinusIcon/MinusIcon";
import PlusIcon from "./PlusIcon/PlusIcon";
import styles from "./Counter.module.scss";

const Counter = ({ item, setNewValue }) => {
    const { quantity } = item;

    const decreaseQuantity = ({ values, setFieldValue }) => {
        setNewValue({
            quantity: Number(values.counter) - 1,
            id: item.id,
        });
        setFieldValue("counter", Number(values.counter) - 1);
    };

    const increaseQuantity = ({ values, setFieldValue }) => {
        setNewValue({
            quantity: Number(values.counter) + 1,
            id: item.id,
        });
        setFieldValue("counter", Number(values.counter) + 1);
    };

    const changeQuantity = ({ values, setFieldValue, setFieldTouched }) => {
        const validCounterValue =
            Number(values.counter) < 1
                ? 1
                : Number(values.counter) > 999
                ? 999
                : Number(values.counter).toFixed(0);
        setFieldValue("counter", validCounterValue);
        setNewValue({
            quantity: Number(validCounterValue),
            id: item.id,
        });
        setFieldTouched("counter", true);
    };

    return (
        <Formik
            initialValues={{ counter: quantity }}
            enableReinitialize={true}
            onSubmit={values => values}
        >
            {formik => (
                <Form>
                    <div className={styles.counter}>
                        <button
                            type="button"
                            disabled={formik.values.counter < 2}
                            className={styles.button}
                            onClick={() => decreaseQuantity(formik)}
                        >
                            <MinusIcon stroke="currentColor" />
                        </button>
                        <Field
                            className={styles.input}
                            name="counter"
                            type="number"
                            onBlur={() => changeQuantity(formik)}
                            value={formik.values.counter}
                        />
                        <button
                            type="button"
                            disabled={formik.values.counter > 998}
                            className={styles.button}
                            onClick={() => increaseQuantity(formik)}
                        >
                            <PlusIcon stroke="currentColor" />
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Counter;
