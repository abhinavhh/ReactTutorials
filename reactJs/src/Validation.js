import { addMethod, string } from "yup";

function configureValidation() {
    addMethod(string, 'startWithUppercase', function () {
        return this.test('start-with-uppercase', 'Starting letter should be uppercase', function (value) {
            if (value && value.length > 0) {
                const firstLetter = value.substring(0, 1);
                return firstLetter === firstLetter.toUpperCase();
            }
            return true;
        });
    });
}

export default configureValidation;
