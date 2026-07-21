import { EndUserRoleEnum } from "@/src/shared/lib/types";

export function roleToPersian(role?: EndUserRoleEnum) {
  switch (role) {
    case EndUserRoleEnum.RETAILER:
      return "خرده‌فروش";
    case EndUserRoleEnum.WHOLESALER:
      return "عمده‌فروش";
    case EndUserRoleEnum.MARKETER:
      return "بازاریاب";
    case EndUserRoleEnum.PRODUCER:
      return "تولیدکننده";
    case EndUserRoleEnum.IMPORTER:
      return "واردکننده";
    case EndUserRoleEnum.MERCHANT:
      return "بازرگان";
    case EndUserRoleEnum.DISTRIBUTOR:
      return "توزیع‌کننده";
    case EndUserRoleEnum.BANK:
      return "بانک";
    case EndUserRoleEnum.GOVERNMENT:
      return "سازمان دولتی";
    case EndUserRoleEnum.INSTITUTE:
      return "موسسه";
    default:
      return "مشتری";
  }
}

