import { Field, Form, Formik } from "formik";
import { DebounceInput } from "react-debounce-input";
import SearchIcon from "../../../../Icons/SearchIcon";
import CrossButton from "../../../../CrossButton/CrossButton";
import Constants from "@/app/[lang]/constants";
import styles from "./InputSearch.module.scss";
import { isEmpty } from "@/helpers/isEmpty";

const InputSearch = ({
    dictionary,
    filter,
    setFilter,
    setShowSearch,
    showSearch,
    clearInput,
}) => {
    return (
        <div className={styles.search}>
            <Formik initialValues={filter}>
                <Form className={styles.search__form}>
                    <SearchIcon
                        iconStyles={`${styles.search__icon} ${
                            !showSearch && styles.show
                        } ${showSearch && styles.doNotShow}`}
                    />
                    <Field
                        name="filter"
                        value={filter}
                        as={DebounceInput}
                        debounceTimeout={Constants.debounce}
                        onChange={e => setFilter(e.target.value)}
                        className={styles.search__input}
                        placeholder={dictionary.header.searchInTheCatalog}
                    ></Field>

                    <CrossButton
                        onClick={() => {
                            clearInput();
                            setShowSearch(false);
                        }}
                        styles__button={`${styles.search__close} ${
                            showSearch && styles.show
                        } ${!showSearch && styles.doNotShow}`}
                    />
                </Form>
            </Formik>
        </div>
    );
};

export default InputSearch;
