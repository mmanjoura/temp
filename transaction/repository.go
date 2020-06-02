package transaction

type Repository interface {
	Save(meta *Meta, collection string) (map[string]string, error)
	Get(date, time string) ([]string, error)
}
