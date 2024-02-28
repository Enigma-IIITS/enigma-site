export class MemberRoleD {
  user: string; // id of user
  roleStartDate?: Date;
  roleEndDate?: Date;
}

export class DomainRoleD {
  domain: string; // id of domain
  domainLeads: MemberRoleD[];
  members: MemberRoleD[];
}
