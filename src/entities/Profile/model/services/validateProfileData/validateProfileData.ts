import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        first,
        lastname,
        age,
        username,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    return errors;
};
