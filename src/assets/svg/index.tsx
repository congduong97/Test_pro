import React, { memo } from 'react';
import { ReactNode } from 'react';
import { AppColors } from '@share/themes';
import { TextLang } from '@components';
import equals from 'react-fast-compare';
// declare icon
import IconEyeOff from './source/eye-off.svg';
import IconBattery from './source/battery.svg';
import IconCancel from './source/cancel.svg';
import IconChat from './source/chat.svg';
import IconTickDone from './source/tick-done.svg';
import IconFacebook from './source/facebook.svg';
import IconFemale from './source/female.svg';
import IconFilter from './source/filter.svg';
import IconForgot from './source/forgot.svg';
import IconGlobal from './source/global.svg';
import IconGoogle from './source/google.svg';
import IconHotBadge from './source/hotBagde.svg';
import IconArrowLeft from './source/arrow-left.svg';
import IconCalendar from './source/calendar.svg';
import IconHome from './source/home.svg';
import IconMenu from './source/menu.svg';
import IconTrending from './source/trending.svg';
import IconClose from './source/close.svg';
import IconBell from './source/bell.svg';
import IconCardId from './source/card-id.svg';
import IconMenuLine from './source/menu-line.svg';
import IconLocation from './source/location.svg';
import IconSearch from './source/search.svg';
import IconChart from './source/chart.svg';
import IconSetting from './source/setting.svg';
import IconUser from './source/user.svg';
import IconLifeSaver from './source/lifesaver.svg';
import IconMan from './source/man.svg';
import IconMale from './source/male.svg';
import IconMoon from './source/moon.svg';
import IconNewBadge from './source/newBagde.svg';
import IconArrowRight from './source/right-arrow.svg';
import IconSignal from './source/signal.svg';
import IconStopWatch from './source/stopwatch.svg';
import IconTick from './source/tick.svg';
import IconVietnam from './source/vietnam.svg';
import IconVipBadge from './source/vipBagde.svg';
import IconEye from './source/eye.svg';
export interface IIcons {
  name:
    | 'eye-off'
    | 'battery'
    | 'cancel'
    | 'chat'
    | 'tick-done'
    | 'facebook'
    | 'female'
    | 'filter'
    | 'forgot'
    | 'global'
    | 'google'
    | 'hot-badge'
    | 'arrow-left'
    | 'calendar'
    | 'home'
    | 'menu'
    | 'trending'
    | 'close'
    | 'bell'
    | 'card-id'
    | 'menu-line'
    | 'location'
    | 'search'
    | 'chart'
    | 'setting'
    | 'user'
    | 'life-saver'
    | 'man'
    | 'male'
    | 'moon'
    | 'new-badge'
    | 'arrow-right'
    | 'signal'
    | 'stop-watch'
    | 'tick'
    | 'vietnam'
    | 'vip-badge'
    | 'eye';
  width?: Number;
  height?: Number;
  color?: String;
}

const IconComp = ({
  name,
  width = 17.5,
  height = 17.5,
  color = AppColors.black,
}: IIcons): ReactNode => {
  if (!name) throw new Error('name is not provider!');

  switch (name) {
    case 'eye-off':
      return <IconEyeOff width={width} height={height} fill={color} />;
    case 'battery':
      return <IconBattery width={width} height={height} fill={color} />;
    case 'cancel':
      return <IconCancel width={width} height={height} fill={color} />;
    case 'chat':
      return <IconChat width={width} height={height} fill={color} />;
    case 'tick-done':
      return <IconTickDone width={width} height={height} fill={color} />;
    case 'facebook':
      return <IconFacebook width={width} height={height} fill={color} />;
    case 'female':
      return <IconFemale width={width} height={height} fill={color} />;
    case 'filter':
      return <IconTick width={width} height={height} fill={color} />;
    case 'forgot':
      return <IconForgot width={width} height={height} fill={color} />;
    case 'global':
      return <IconGlobal width={width} height={height} fill={color} />;
    case 'google':
      return <IconGoogle width={width} height={height} fill={color} />;
    case 'hot-badge':
      return <IconHotBadge width={width} height={height} fill={color} />;
    case 'arrow-left':
      return <IconArrowLeft width={width} height={height} fill={color} />;
    case 'calendar':
      return <IconCalendar width={width} height={height} fill={color} />;
    case 'calendar':
      return <IconCalendar width={width} height={height} fill={color} />;
    case 'home':
      return <IconHome width={width} height={height} fill={color} />;
    case 'menu':
      return <IconMenu width={width} height={height} fill={color} />;
    case 'trending':
      return <IconTrending width={width} height={height} fill={color} />;
    case 'close':
      return <IconClose width={width} height={height} fill={color} />;
    case 'bell':
      return <IconBell width={width} height={height} fill={color} />;
    case 'card-id':
      return <IconCardId width={width} height={height} fill={color} />;
    case 'menu-line':
      return <IconMenuLine width={width} height={height} fill={color} />;
    case 'location':
      return <IconLocation width={width} height={height} fill={color} />;
    case 'search':
      return <IconSearch width={width} height={height} fill={color} />;
    case 'chart':
      return <IconChart width={width} height={height} fill={color} />;
    case 'setting':
      return <IconSetting width={width} height={height} fill={color} />;
    case 'user':
      return <IconUser width={width} height={height} fill={color} />;
    case 'life-saver':
      return <IconLifeSaver width={width} height={height} fill={color} />;
    case 'man':
      return <IconMan width={width} height={height} fill={color} />;
    case 'male':
      return <IconMale width={width} height={height} fill={color} />;
    case 'moon':
      return <IconMoon width={width} height={height} fill={color} />;
    case 'new-badge':
      return <IconNewBadge width={width} height={height} fill={color} />;
    case 'arrow-right':
      return <IconArrowRight width={width} height={height} fill={color} />;
    case 'signal':
      return <IconSignal width={width} height={height} fill={color} />;
    case 'stop-watch':
      return <IconStopWatch width={width} height={height} fill={color} />;
    case 'tick':
      return <IconTick width={width} height={height} fill={color} />;
    case 'vietnam':
      return <IconVietnam width={width} height={height} fill={color} />;
    case 'vip-badge':
      return <IconVipBadge width={width} height={height} fill={color} />;
    case 'eye':
      return <IconEye width={width} height={height} fill={color} />;
    default:
      return <TextLang>Icon not found!</TextLang>;
  }
};

export const Icon = memo(IconComp, equals);
