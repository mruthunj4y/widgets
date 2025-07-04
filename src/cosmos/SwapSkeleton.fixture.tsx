import { darkTheme, defaultTheme, lightTheme, SwapWidgetSkeleton } from '@surge/widgets'
import { useEffect } from 'react'
import { useValue } from 'react-cosmos/fixture'

function Fixture() {
  const [width] = useValue('width', { defaultValue: 360 })
  const [theme, setTheme] = useValue('theme', { defaultValue: defaultTheme })
  const [darkMode] = useValue('darkMode', { defaultValue: false })
  useEffect(() => setTheme((theme) => ({ ...theme, ...(darkMode ? darkTheme : lightTheme) })), [darkMode, setTheme])

  return <SwapWidgetSkeleton theme={theme} width={width} />
}

export default <Fixture />
