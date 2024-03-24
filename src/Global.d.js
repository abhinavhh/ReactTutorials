import { StringSchema } from "yup";

StringSchema.prototype.startWithUppercase = function () {
    return this.test('start-with-uppercase', 'Starting letter should be uppercase', function (value) {
        if (value && value.length > 0) {
            const firstLetter = value.substring(0, 1);
            return firstLetter === firstLetter.toUpperCase();
        }
        return true;
    });
};
