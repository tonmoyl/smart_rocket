import Rocket from './rocket';

export default class CrashRocket extends Rocket {
  constructor(ctx, lineage) {
    super(ctx);
    this.lineage = lineage;
  }

}
