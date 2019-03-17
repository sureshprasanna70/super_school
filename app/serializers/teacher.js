import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	modelNameFromPayloadKey: function(payloadKey) {
    if (payloadKey === 'data') {
      return this._super(payloadKey.replace('data', 'teachers'));
    } else {
     return this._super(payloadKey);
    }
}
});