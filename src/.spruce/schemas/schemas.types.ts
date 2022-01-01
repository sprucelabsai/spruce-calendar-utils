/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import '@sprucelabs/spruce-event-utils'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.CalendarUtils.v2021_05_19 {

		
		interface EventExclusionDate {
			
				
				'year': number
				
				'month': number
				
				'day': number
		}

		interface EventExclusionDateSchema extends SpruceSchema.Schema {
			id: 'eventExclusionDate',
			version: 'v2021_05_19',
			namespace: 'CalendarUtils',
			name: '',
			moduleToImportFromWhenRemote: '@sprucelabs/spruce-calendar-utils',
			    fields: {
			            /** . */
			            'year': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'month': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'day': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type EventExclusionDateEntity = SchemaEntity<SpruceSchemas.CalendarUtils.v2021_05_19.EventExclusionDateSchema>

	}


	namespace SpruceSchemas.CalendarUtils.v2021_05_19 {

		
		interface EventTimeBlock {
			
				
				'title'?: string| undefined | null
				
				'subtitle'?: string| undefined | null
				
				'isBusy': boolean
				
				'durationMinutes': number
				
				'rightIcons'?: ("sprucebot" | "add-circle" | "chevron-left" | "document-text" | "link-angle" | "play-circle" | "star" | "add-square" | "chevron-right" | "download-cloud" | "link-flat" | "present" | "sun" | "add" | "chevron-up" | "download" | "loader" | "refresh-circle" | "tag" | "alarm" | "clipboard" | "edit-box" | "location-pin" | "refresh" | "time" | "arrow-back" | "clock" | "edit-line" | "lock" | "repeat" | "tool" | "arrow-down-circle" | "close-circle" | "email" | "map" | "restricted" | "trending-down" | "arrow-down" | "close-square" | "emoji-happy" | "message-circle" | "rotate" | "trending-up" | "arrow-next" | "close" | "emoji-sad" | "message-square" | "search-no" | "triangle" | "arrow-up-circle" | "code" | "external-link" | "mic-off" | "search" | "unlock" | "arrow-up" | "coffee" | "fav-heart" | "mic-on" | "selector-checked" | "upload-cloud" | "attachment" | "command" | "flag" | "minus-circle" | "selector-circle-filled" | "upload" | "award-badge" | "corner-down-left" | "flip-01" | "minus-square" | "selector-circle" | "user-add" | "binoculars" | "corner-down-right" | "flip-02" | "money-sign" | "send" | "user-delete" | "bolt" | "corner-left-down" | "folder" | "more-horizontal" | "settings-filled" | "user" | "book-open" | "corner-left-up" | "globe" | "more-vertical" | "settings" | "users" | "book" | "corner-right-down" | "hash-tag" | "notification-off" | "share" | "video-off" | "bookmark" | "corner-right-up" | "headphones" | "notification-on" | "shopping-bag" | "video" | "calendar-add" | "corner-up-left" | "help-buoy" | "object" | "shopping-cart" | "warning" | "calendar" | "corner-up-right" | "help-circle" | "pause-circle" | "sort-filter-down" | "wifi" | "camera" | "crop" | "home" | "phone-unavailable" | "sort-filter-up" | "zoom-in" | "cellphone" | "delete" | "info" | "phone" | "sound-off" | "zoom-out" | "checkmark" | "document-blank" | "jump" | "photo" | "sound-on" | "chevron-down" | "document-new" | "layers" | "picked" | "star-filled")[]| undefined | null
				
				'leftIcons'?: ("sprucebot" | "add-circle" | "chevron-left" | "document-text" | "link-angle" | "play-circle" | "star" | "add-square" | "chevron-right" | "download-cloud" | "link-flat" | "present" | "sun" | "add" | "chevron-up" | "download" | "loader" | "refresh-circle" | "tag" | "alarm" | "clipboard" | "edit-box" | "location-pin" | "refresh" | "time" | "arrow-back" | "clock" | "edit-line" | "lock" | "repeat" | "tool" | "arrow-down-circle" | "close-circle" | "email" | "map" | "restricted" | "trending-down" | "arrow-down" | "close-square" | "emoji-happy" | "message-circle" | "rotate" | "trending-up" | "arrow-next" | "close" | "emoji-sad" | "message-square" | "search-no" | "triangle" | "arrow-up-circle" | "code" | "external-link" | "mic-off" | "search" | "unlock" | "arrow-up" | "coffee" | "fav-heart" | "mic-on" | "selector-checked" | "upload-cloud" | "attachment" | "command" | "flag" | "minus-circle" | "selector-circle-filled" | "upload" | "award-badge" | "corner-down-left" | "flip-01" | "minus-square" | "selector-circle" | "user-add" | "binoculars" | "corner-down-right" | "flip-02" | "money-sign" | "send" | "user-delete" | "bolt" | "corner-left-down" | "folder" | "more-horizontal" | "settings-filled" | "user" | "book-open" | "corner-left-up" | "globe" | "more-vertical" | "settings" | "users" | "book" | "corner-right-down" | "hash-tag" | "notification-off" | "share" | "video-off" | "bookmark" | "corner-right-up" | "headphones" | "notification-on" | "shopping-bag" | "video" | "calendar-add" | "corner-up-left" | "help-buoy" | "object" | "shopping-cart" | "warning" | "calendar" | "corner-up-right" | "help-circle" | "pause-circle" | "sort-filter-down" | "wifi" | "camera" | "crop" | "home" | "phone-unavailable" | "sort-filter-up" | "zoom-in" | "cellphone" | "delete" | "info" | "phone" | "sound-off" | "zoom-out" | "checkmark" | "document-blank" | "jump" | "photo" | "sound-on" | "chevron-down" | "document-new" | "layers" | "picked" | "star-filled")[]| undefined | null
		}

		interface EventTimeBlockSchema extends SpruceSchema.Schema {
			id: 'eventTimeBlock',
			version: 'v2021_05_19',
			namespace: 'CalendarUtils',
			name: '',
			moduleToImportFromWhenRemote: '@sprucelabs/spruce-calendar-utils',
			    fields: {
			            /** . */
			            'title': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'subtitle': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'isBusy': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'durationMinutes': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'rightIcons': {
			                type: 'select',
			                isArray: true,
			                options: {choices: [{"value":"sprucebot","label":"sprucebot"},{"value":"add-circle","label":"add-circle"},{"value":"chevron-left","label":"chevron-left"},{"value":"document-text","label":"document-text"},{"value":"link-angle","label":"link-angle"},{"value":"play-circle","label":"play-circle"},{"value":"star","label":"star"},{"value":"add-square","label":"add-square"},{"value":"chevron-right","label":"chevron-right"},{"value":"download-cloud","label":"download-cloud"},{"value":"link-flat","label":"link-flat"},{"value":"present","label":"present"},{"value":"sun","label":"sun"},{"value":"add","label":"add"},{"value":"chevron-up","label":"chevron-up"},{"value":"download","label":"download"},{"value":"loader","label":"loader"},{"value":"refresh-circle","label":"refresh-circle"},{"value":"tag","label":"tag"},{"value":"alarm","label":"alarm"},{"value":"clipboard","label":"clipboard"},{"value":"edit-box","label":"edit-box"},{"value":"location-pin","label":"location-pin"},{"value":"refresh","label":"refresh"},{"value":"time","label":"time"},{"value":"arrow-back","label":"arrow-back"},{"value":"clock","label":"clock"},{"value":"edit-line","label":"edit-line"},{"value":"lock","label":"lock"},{"value":"repeat","label":"repeat"},{"value":"tool","label":"tool"},{"value":"arrow-down-circle","label":"arrow-down-circle"},{"value":"close-circle","label":"close-circle"},{"value":"email","label":"email"},{"value":"map","label":"map"},{"value":"restricted","label":"restricted"},{"value":"trending-down","label":"trending-down"},{"value":"arrow-down","label":"arrow-down"},{"value":"close-square","label":"close-square"},{"value":"emoji-happy","label":"emoji-happy"},{"value":"message-circle","label":"message-circle"},{"value":"rotate","label":"rotate"},{"value":"trending-up","label":"trending-up"},{"value":"arrow-next","label":"arrow-next"},{"value":"close","label":"close"},{"value":"emoji-sad","label":"emoji-sad"},{"value":"message-square","label":"message-square"},{"value":"search-no","label":"search-no"},{"value":"triangle","label":"triangle"},{"value":"arrow-up-circle","label":"arrow-up-circle"},{"value":"code","label":"code"},{"value":"external-link","label":"external-link"},{"value":"mic-off","label":"mic-off"},{"value":"search","label":"search"},{"value":"unlock","label":"unlock"},{"value":"arrow-up","label":"arrow-up"},{"value":"coffee","label":"coffee"},{"value":"fav-heart","label":"fav-heart"},{"value":"mic-on","label":"mic-on"},{"value":"selector-checked","label":"selector-checked"},{"value":"upload-cloud","label":"upload-cloud"},{"value":"attachment","label":"attachment"},{"value":"command","label":"command"},{"value":"flag","label":"flag"},{"value":"minus-circle","label":"minus-circle"},{"value":"selector-circle-filled","label":"selector-circle-filled"},{"value":"upload","label":"upload"},{"value":"award-badge","label":"award-badge"},{"value":"corner-down-left","label":"corner-down-left"},{"value":"flip-01","label":"flip-01"},{"value":"minus-square","label":"minus-square"},{"value":"selector-circle","label":"selector-circle"},{"value":"user-add","label":"user-add"},{"value":"binoculars","label":"binoculars"},{"value":"corner-down-right","label":"corner-down-right"},{"value":"flip-02","label":"flip-02"},{"value":"money-sign","label":"money-sign"},{"value":"send","label":"send"},{"value":"user-delete","label":"user-delete"},{"value":"bolt","label":"bolt"},{"value":"corner-left-down","label":"corner-left-down"},{"value":"folder","label":"folder"},{"value":"more-horizontal","label":"more-horizontal"},{"value":"settings-filled","label":"settings-filled"},{"value":"user","label":"user"},{"value":"book-open","label":"book-open"},{"value":"corner-left-up","label":"corner-left-up"},{"value":"globe","label":"globe"},{"value":"more-vertical","label":"more-vertical"},{"value":"settings","label":"settings"},{"value":"users","label":"users"},{"value":"book","label":"book"},{"value":"corner-right-down","label":"corner-right-down"},{"value":"hash-tag","label":"hash-tag"},{"value":"notification-off","label":"notification-off"},{"value":"share","label":"share"},{"value":"video-off","label":"video-off"},{"value":"bookmark","label":"bookmark"},{"value":"corner-right-up","label":"corner-right-up"},{"value":"headphones","label":"headphones"},{"value":"notification-on","label":"notification-on"},{"value":"shopping-bag","label":"shopping-bag"},{"value":"video","label":"video"},{"value":"calendar-add","label":"calendar-add"},{"value":"corner-up-left","label":"corner-up-left"},{"value":"help-buoy","label":"help-buoy"},{"value":"object","label":"object"},{"value":"shopping-cart","label":"shopping-cart"},{"value":"warning","label":"warning"},{"value":"calendar","label":"calendar"},{"value":"corner-up-right","label":"corner-up-right"},{"value":"help-circle","label":"help-circle"},{"value":"pause-circle","label":"pause-circle"},{"value":"sort-filter-down","label":"sort-filter-down"},{"value":"wifi","label":"wifi"},{"value":"camera","label":"camera"},{"value":"crop","label":"crop"},{"value":"home","label":"home"},{"value":"phone-unavailable","label":"phone-unavailable"},{"value":"sort-filter-up","label":"sort-filter-up"},{"value":"zoom-in","label":"zoom-in"},{"value":"cellphone","label":"cellphone"},{"value":"delete","label":"delete"},{"value":"info","label":"info"},{"value":"phone","label":"phone"},{"value":"sound-off","label":"sound-off"},{"value":"zoom-out","label":"zoom-out"},{"value":"checkmark","label":"checkmark"},{"value":"document-blank","label":"document-blank"},{"value":"jump","label":"jump"},{"value":"photo","label":"photo"},{"value":"sound-on","label":"sound-on"},{"value":"chevron-down","label":"chevron-down"},{"value":"document-new","label":"document-new"},{"value":"layers","label":"layers"},{"value":"picked","label":"picked"},{"value":"star-filled","label":"star-filled"}],}
			            },
			            /** . */
			            'leftIcons': {
			                type: 'select',
			                isArray: true,
			                options: {choices: [{"value":"sprucebot","label":"sprucebot"},{"value":"add-circle","label":"add-circle"},{"value":"chevron-left","label":"chevron-left"},{"value":"document-text","label":"document-text"},{"value":"link-angle","label":"link-angle"},{"value":"play-circle","label":"play-circle"},{"value":"star","label":"star"},{"value":"add-square","label":"add-square"},{"value":"chevron-right","label":"chevron-right"},{"value":"download-cloud","label":"download-cloud"},{"value":"link-flat","label":"link-flat"},{"value":"present","label":"present"},{"value":"sun","label":"sun"},{"value":"add","label":"add"},{"value":"chevron-up","label":"chevron-up"},{"value":"download","label":"download"},{"value":"loader","label":"loader"},{"value":"refresh-circle","label":"refresh-circle"},{"value":"tag","label":"tag"},{"value":"alarm","label":"alarm"},{"value":"clipboard","label":"clipboard"},{"value":"edit-box","label":"edit-box"},{"value":"location-pin","label":"location-pin"},{"value":"refresh","label":"refresh"},{"value":"time","label":"time"},{"value":"arrow-back","label":"arrow-back"},{"value":"clock","label":"clock"},{"value":"edit-line","label":"edit-line"},{"value":"lock","label":"lock"},{"value":"repeat","label":"repeat"},{"value":"tool","label":"tool"},{"value":"arrow-down-circle","label":"arrow-down-circle"},{"value":"close-circle","label":"close-circle"},{"value":"email","label":"email"},{"value":"map","label":"map"},{"value":"restricted","label":"restricted"},{"value":"trending-down","label":"trending-down"},{"value":"arrow-down","label":"arrow-down"},{"value":"close-square","label":"close-square"},{"value":"emoji-happy","label":"emoji-happy"},{"value":"message-circle","label":"message-circle"},{"value":"rotate","label":"rotate"},{"value":"trending-up","label":"trending-up"},{"value":"arrow-next","label":"arrow-next"},{"value":"close","label":"close"},{"value":"emoji-sad","label":"emoji-sad"},{"value":"message-square","label":"message-square"},{"value":"search-no","label":"search-no"},{"value":"triangle","label":"triangle"},{"value":"arrow-up-circle","label":"arrow-up-circle"},{"value":"code","label":"code"},{"value":"external-link","label":"external-link"},{"value":"mic-off","label":"mic-off"},{"value":"search","label":"search"},{"value":"unlock","label":"unlock"},{"value":"arrow-up","label":"arrow-up"},{"value":"coffee","label":"coffee"},{"value":"fav-heart","label":"fav-heart"},{"value":"mic-on","label":"mic-on"},{"value":"selector-checked","label":"selector-checked"},{"value":"upload-cloud","label":"upload-cloud"},{"value":"attachment","label":"attachment"},{"value":"command","label":"command"},{"value":"flag","label":"flag"},{"value":"minus-circle","label":"minus-circle"},{"value":"selector-circle-filled","label":"selector-circle-filled"},{"value":"upload","label":"upload"},{"value":"award-badge","label":"award-badge"},{"value":"corner-down-left","label":"corner-down-left"},{"value":"flip-01","label":"flip-01"},{"value":"minus-square","label":"minus-square"},{"value":"selector-circle","label":"selector-circle"},{"value":"user-add","label":"user-add"},{"value":"binoculars","label":"binoculars"},{"value":"corner-down-right","label":"corner-down-right"},{"value":"flip-02","label":"flip-02"},{"value":"money-sign","label":"money-sign"},{"value":"send","label":"send"},{"value":"user-delete","label":"user-delete"},{"value":"bolt","label":"bolt"},{"value":"corner-left-down","label":"corner-left-down"},{"value":"folder","label":"folder"},{"value":"more-horizontal","label":"more-horizontal"},{"value":"settings-filled","label":"settings-filled"},{"value":"user","label":"user"},{"value":"book-open","label":"book-open"},{"value":"corner-left-up","label":"corner-left-up"},{"value":"globe","label":"globe"},{"value":"more-vertical","label":"more-vertical"},{"value":"settings","label":"settings"},{"value":"users","label":"users"},{"value":"book","label":"book"},{"value":"corner-right-down","label":"corner-right-down"},{"value":"hash-tag","label":"hash-tag"},{"value":"notification-off","label":"notification-off"},{"value":"share","label":"share"},{"value":"video-off","label":"video-off"},{"value":"bookmark","label":"bookmark"},{"value":"corner-right-up","label":"corner-right-up"},{"value":"headphones","label":"headphones"},{"value":"notification-on","label":"notification-on"},{"value":"shopping-bag","label":"shopping-bag"},{"value":"video","label":"video"},{"value":"calendar-add","label":"calendar-add"},{"value":"corner-up-left","label":"corner-up-left"},{"value":"help-buoy","label":"help-buoy"},{"value":"object","label":"object"},{"value":"shopping-cart","label":"shopping-cart"},{"value":"warning","label":"warning"},{"value":"calendar","label":"calendar"},{"value":"corner-up-right","label":"corner-up-right"},{"value":"help-circle","label":"help-circle"},{"value":"pause-circle","label":"pause-circle"},{"value":"sort-filter-down","label":"sort-filter-down"},{"value":"wifi","label":"wifi"},{"value":"camera","label":"camera"},{"value":"crop","label":"crop"},{"value":"home","label":"home"},{"value":"phone-unavailable","label":"phone-unavailable"},{"value":"sort-filter-up","label":"sort-filter-up"},{"value":"zoom-in","label":"zoom-in"},{"value":"cellphone","label":"cellphone"},{"value":"delete","label":"delete"},{"value":"info","label":"info"},{"value":"phone","label":"phone"},{"value":"sound-off","label":"sound-off"},{"value":"zoom-out","label":"zoom-out"},{"value":"checkmark","label":"checkmark"},{"value":"document-blank","label":"document-blank"},{"value":"jump","label":"jump"},{"value":"photo","label":"photo"},{"value":"sound-on","label":"sound-on"},{"value":"chevron-down","label":"chevron-down"},{"value":"document-new","label":"document-new"},{"value":"layers","label":"layers"},{"value":"picked","label":"picked"},{"value":"star-filled","label":"star-filled"}],}
			            },
			    }
		}

		type EventTimeBlockEntity = SchemaEntity<SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlockSchema>

	}


	namespace SpruceSchemas.CalendarUtils.v2021_05_19 {

		
		interface CalendarEventTarget {
			
				
				'locationId'?: string| undefined | null
				
				'personId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'skillId'?: string| undefined | null
				
				'roleId'?: string| undefined | null
		}

		interface CalendarEventTargetSchema extends SpruceSchema.Schema {
			id: 'calendarEventTarget',
			version: 'v2021_05_19',
			namespace: 'CalendarUtils',
			name: '',
			moduleToImportFromWhenRemote: '@sprucelabs/spruce-calendar-utils',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type CalendarEventTargetEntity = SchemaEntity<SpruceSchemas.CalendarUtils.v2021_05_19.CalendarEventTargetSchema>

	}


	namespace SpruceSchemas.CalendarUtils.v2021_05_19 {

		
		interface CalendarEvent {
			
				
				'id': string
				
				'source': SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource
				
				'target': SpruceSchemas.CalendarUtils.v2021_05_19.CalendarEventTarget
				
				'calendarId': string
				
				'eventTypeSlug'?: string| undefined | null
				
				'startDateTimeMs': number
				
				'isBusy'?: boolean| undefined | null
				
				'isResizeable'?: boolean| undefined | null
				
				'style'?: ("tentative" | "upcoming" | "unavailable" | "blocked" | "active" | "past" | "warn" | "critical")| undefined | null
				
				'groupId'?: string| undefined | null
				
				'timeBlocks': SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlock[]
				
				'repeats'?: ("weekly" | "monthly" | "daily")| undefined | null
				
				'daysOfWeek'?: ("sun" | "mon" | "tue" | "wed" | "thur" | "fri" | "sat")[]| undefined | null
				
				'repeatsUntil'?: number| undefined | null
				
				'occurrences'?: number| undefined | null
				
				'interval'?: number| undefined | null
				
				'nthOccurrences'?: number[]| undefined | null
				
				'activeUntilDate': number
				
				'exclusionDates'?: SpruceSchemas.CalendarUtils.v2021_05_19.EventExclusionDate[]| undefined | null
				
				'dateDeleted'?: number| undefined | null
				
				'dateCreated': number
		}

		interface CalendarEventSchema extends SpruceSchema.Schema {
			id: 'calendarEvent',
			version: 'v2021_05_19',
			namespace: 'CalendarUtils',
			name: '',
			moduleToImportFromWhenRemote: '@sprucelabs/spruce-calendar-utils',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'source': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.CalendarUtils.v2021_05_19.CalendarEventTargetSchema,}
			            },
			            /** . */
			            'calendarId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'eventTypeSlug': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'startDateTimeMs': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'isBusy': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'isResizeable': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'style': {
			                type: 'select',
			                options: {choices: [{"value":"tentative","label":"tentative"},{"value":"upcoming","label":"upcoming"},{"value":"unavailable","label":"unavailable"},{"value":"blocked","label":"blocked"},{"value":"active","label":"active"},{"value":"past","label":"past"},{"value":"warn","label":"warn"},{"value":"critical","label":"critical"}],}
			            },
			            /** . */
			            'groupId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'timeBlocks': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 1,
			                options: {schema: SpruceSchemas.CalendarUtils.v2021_05_19.EventTimeBlockSchema,}
			            },
			            /** . */
			            'repeats': {
			                type: 'select',
			                options: {choices: [{"value":"weekly","label":"Weekly"},{"value":"monthly","label":"Monthly"},{"value":"daily","label":"Daily"}],}
			            },
			            /** . */
			            'daysOfWeek': {
			                type: 'select',
			                isArray: true,
			                options: {choices: [{"value":"sun","label":"Sunday"},{"value":"mon","label":"Monday"},{"value":"tue","label":"Tuesday"},{"value":"wed","label":"Wednesday"},{"value":"thur","label":"Thursday"},{"value":"fri","label":"Friday"},{"value":"sat","label":"Saturday"}],}
			            },
			            /** . */
			            'repeatsUntil': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'occurrences': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'interval': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'nthOccurrences': {
			                type: 'number',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'activeUntilDate': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'exclusionDates': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.CalendarUtils.v2021_05_19.EventExclusionDateSchema,}
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type CalendarEventEntity = SchemaEntity<SpruceSchemas.CalendarUtils.v2021_05_19.CalendarEventSchema>

	}

}
