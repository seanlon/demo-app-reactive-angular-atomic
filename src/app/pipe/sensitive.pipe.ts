import { Pipe, PipeTransform } from '@angular/core';
/**
 * Sensitive data pipe
 * @class Sensitive
 * @implements {PipeTransform}
 */
@Pipe({ name: 'sensitiveData' })
export class SensitiveData implements PipeTransform {
    /**
     * Remove and trim all spaces in a string
     * @param {string} value
     * @returns {string}
     * @memberOf Sensitive
     */
    transform(value: string): string {
        if (!value) { return ''; }
        let mask = '';
        for (let i = 0; i < value.length; i++) {
            mask += '*';
        }
        return mask;
    }
}
