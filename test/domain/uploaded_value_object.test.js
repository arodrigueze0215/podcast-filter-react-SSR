import Uploaded from '../../src/core/podcast/domain/value_objects/uploaded_value_object';

test('test fromat date of uploaded domain value object', () => {
    const uploaded = new Uploaded('2021-01-01T11:38:15.000Z');
    expect(uploaded.formatDate()).toBe('January 01, 2021')
});