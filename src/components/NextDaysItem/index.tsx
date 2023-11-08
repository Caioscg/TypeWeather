import './styles.css';

export type NextDayItemProps = {
  day: string
  icon: string
  weather: string
  min: number
  max: number
}
type Props = {
  data: NextDayItemProps
}

export function NextDaysItem({ data }: Props) {
  return (
    <div className='next-day-item'>
      <h2>{data.day}</h2>

      <img src={data.icon} alt={data.weather} />

      <h3>{data.weather}</h3>

      <p>
        {data.min}ºc <span>{data.max}ºc</span>
      </p>
    </div>
  )
}