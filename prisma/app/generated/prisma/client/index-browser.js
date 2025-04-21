
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.HotelScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  addressId: 'addressId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  streetAddress: 'streetAddress',
  city: 'city',
  stateProvince: 'stateProvince',
  postalCode: 'postalCode',
  countryCode: 'countryCode',
  latitude: 'latitude',
  longitude: 'longitude',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  altText: 'altText',
  order: 'order',
  hotelId: 'hotelId',
  roomTypeId: 'roomTypeId',
  createdAt: 'createdAt'
};

exports.Prisma.AmenityScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  category: 'category',
  createdAt: 'createdAt'
};

exports.Prisma.HotelAmenityScalarFieldEnum = {
  hotelId: 'hotelId',
  amenityId: 'amenityId',
  details: 'details',
  createdAt: 'createdAt'
};

exports.Prisma.RoomTypeScalarFieldEnum = {
  id: 'id',
  hotelId: 'hotelId',
  name: 'name',
  description: 'description',
  maxGuests: 'maxGuests',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoomTypeAmenityScalarFieldEnum = {
  roomTypeId: 'roomTypeId',
  amenityId: 'amenityId',
  createdAt: 'createdAt'
};

exports.Prisma.RoomScalarFieldEnum = {
  id: 'id',
  roomTypeId: 'roomTypeId',
  roomNumber: 'roomNumber',
  floor: 'floor',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hotelId: 'hotelId'
};

exports.Prisma.RoomInventoryScalarFieldEnum = {
  id: 'id',
  roomTypeId: 'roomTypeId',
  date: 'date',
  totalInventory: 'totalInventory',
  bookedCount: 'bookedCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hotelId: 'hotelId'
};

exports.Prisma.RoomPriceScalarFieldEnum = {
  id: 'id',
  roomTypeId: 'roomTypeId',
  date: 'date',
  price: 'price',
  currency: 'currency',
  priceType: 'priceType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hotelId: 'hotelId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
  phoneNumber: 'phoneNumber',
  roleId: 'roleId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BookingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  roomTypeId: 'roomTypeId',
  numberOfRooms: 'numberOfRooms',
  checkIn: 'checkIn',
  checkOut: 'checkOut',
  totalAmount: 'totalAmount',
  currency: 'currency',
  status: 'status',
  guestName: 'guestName',
  guestSurname: 'guestSurname',
  guestEmail: 'guestEmail',
  guestPhone: 'guestPhone',
  guestIdentity: 'guestIdentity',
  promotionId: 'promotionId',
  cancellationPolicyId: 'cancellationPolicyId',
  promotionSnapshot: 'promotionSnapshot',
  policySnapshot: 'policySnapshot',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hotelId: 'hotelId'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  amount: 'amount',
  currency: 'currency',
  paymentMethod: 'paymentMethod',
  paymentGatewayId: 'paymentGatewayId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  paymentId: 'paymentId',
  type: 'type',
  amount: 'amount',
  currency: 'currency',
  gatewayResponse: 'gatewayResponse',
  timestamp: 'timestamp',
  status: 'status'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  userId: 'userId',
  rating: 'rating',
  title: 'title',
  comment: 'comment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hotelId: 'hotelId'
};

exports.Prisma.PromotionScalarFieldEnum = {
  id: 'id',
  code: 'code',
  description: 'description',
  discountType: 'discountType',
  discountValue: 'discountValue',
  validFrom: 'validFrom',
  validUntil: 'validUntil',
  maxUses: 'maxUses',
  usesPerUser: 'usesPerUser',
  currentUses: 'currentUses',
  minNights: 'minNights',
  minAmount: 'minAmount',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CancellationPolicyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  rules: 'rules',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hotelId: 'hotelId'
};

exports.Prisma.CancellationScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  reason: 'reason',
  cancelledAt: 'cancelledAt',
  processedByUserId: 'processedByUserId',
  refundAmount: 'refundAmount',
  refundStatus: 'refundStatus',
  notes: 'notes'
};

exports.Prisma.PromotionHotelScalarFieldEnum = {
  id: 'id',
  promotionId: 'promotionId',
  hotelId: 'hotelId',
  createdAt: 'createdAt'
};

exports.Prisma.PromotionRoomTypeScalarFieldEnum = {
  id: 'id',
  promotionId: 'promotionId',
  roomTypeId: 'roomTypeId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.RoomStatus = exports.$Enums.RoomStatus = {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE',
  CLEANING: 'CLEANING'
};

exports.CurrencyCode = exports.$Enums.CurrencyCode = {
  USD: 'USD',
  EUR: 'EUR',
  TRY: 'TRY'
};

exports.PriceType = exports.$Enums.PriceType = {
  STANDARD: 'STANDARD',
  DISCOUNTED: 'DISCOUNTED',
  PEAK_SEASON: 'PEAK_SEASON',
  EVENT: 'EVENT',
  PROMOTIONAL: 'PROMOTIONAL'
};

exports.BookingStatus = exports.$Enums.BookingStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  CHECKED_IN: 'CHECKED_IN',
  CHECKED_OUT: 'CHECKED_OUT',
  NO_SHOW: 'NO_SHOW',
  REJECTED: 'REJECTED'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
  PAYPAL: 'PAYPAL',
  BANK_TRANSFER: 'BANK_TRANSFER',
  OTHER: 'OTHER'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  PARTIAL_REFUND: 'PARTIAL_REFUND'
};

exports.TransactionType = exports.$Enums.TransactionType = {
  AUTHORIZATION: 'AUTHORIZATION',
  CHARGE: 'CHARGE',
  REFUND: 'REFUND',
  VOID: 'VOID'
};

exports.TransactionStatus = exports.$Enums.TransactionStatus = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

exports.DiscountType = exports.$Enums.DiscountType = {
  PERCENTAGE: 'PERCENTAGE',
  FIXED_AMOUNT: 'FIXED_AMOUNT'
};

exports.Prisma.ModelName = {
  Hotel: 'Hotel',
  Address: 'Address',
  Image: 'Image',
  Amenity: 'Amenity',
  HotelAmenity: 'HotelAmenity',
  RoomType: 'RoomType',
  RoomTypeAmenity: 'RoomTypeAmenity',
  Room: 'Room',
  RoomInventory: 'RoomInventory',
  RoomPrice: 'RoomPrice',
  User: 'User',
  Role: 'Role',
  Booking: 'Booking',
  Payment: 'Payment',
  Transaction: 'Transaction',
  Review: 'Review',
  Promotion: 'Promotion',
  CancellationPolicy: 'CancellationPolicy',
  Cancellation: 'Cancellation',
  PromotionHotel: 'PromotionHotel',
  PromotionRoomType: 'PromotionRoomType'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
